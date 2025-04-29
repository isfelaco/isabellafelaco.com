import {
	Box,
	BoxProps,
	Tab as MTab,
	TabProps as MTabProps,
	Tabs as MTabs,
	TabsProps as MTabsProps,
	useMediaQuery,
} from "@mui/material";
import React, {
	createContext,
	useCallback,
	useState,
	useContext,
	useMemo,
	useId,
	ReactNode,
} from "react";

interface TabsContextValue {
	currentTab: number;
	tabsId: string;
	handleChange: (_: unknown, newValue: number) => void;
}
const TabsContext = createContext<TabsContextValue | undefined>(undefined);
const useTabsContext = () => useContext(TabsContext);

const getTabId = (index: number, tabsId: string) =>
	`trigger-${index}-${tabsId}`;
const getPanelId = (index: number, tabsId: string) =>
	`panel-${index}-${tabsId}`;

interface MuiTabsProps {
	defaultValue?: number;
	value?: number;
	onValueChange?: (newValue: number) => void;
	children: React.ReactNode;
}
function MuiTabs({
	defaultValue = 0,
	value,
	onValueChange,
	children,
}: MuiTabsProps) {
	const tabsId = useId();
	const [currentTab, setCurrentTab] = useState(defaultValue);
	const handleChange = useCallback(
		(_: unknown, newValue: number) =>
			onValueChange ? onValueChange(newValue) : setCurrentTab(newValue),
		[onValueChange]
	);
	const contextValue = useMemo(
		() => ({
			currentTab: value ?? currentTab,
			tabsId,
			handleChange,
		}),
		[currentTab, handleChange, tabsId, value]
	);

	return (
		<TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
	);
}

interface TabsProps extends MTabsProps {
	children: ReactNode;
	ariaLabel: string;
}
export function Tabs({ children, ariaLabel, ...rest }: TabsProps) {
	const context = useTabsContext();
	if (!context)
		throw new Error("Tabs must be used within an MuiTabs component");
	const { currentTab, handleChange } = context;

	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<MTabs
			value={currentTab}
			onChange={handleChange}
			aria-label={ariaLabel}
			component="div"
			centered
			variant={isMobile ? "scrollable" : "fullWidth"}
			scrollButtons="auto"
			{...rest}
		>
			{children}
		</MTabs>
	);
}

interface TabProps extends MTabProps {
	label: React.ReactNode;
	index: number;
}
export function Tab({ label, index, ...rest }: TabProps) {
	const context = useTabsContext();
	if (!context) throw new Error("Tab must be used within an MuiTabs component");
	const { tabsId } = context;
	return (
		<MTab
			label={label}
			id={getTabId(index, tabsId)}
			aria-controls={getPanelId(index, tabsId)}
			{...rest}
		/>
	);
}

interface PanelProps extends BoxProps {
	children?: React.ReactNode;
	index: number;
}
export function Panel({ children, index, ...rest }: PanelProps) {
	const context = useTabsContext();
	if (!context)
		throw new Error("Tabs.Panel must be used within an MuiTabs component");
	const { currentTab, tabsId } = context;
	if (currentTab !== index) return null;

	return (
		<Box
			role="tabpanel"
			hidden={currentTab !== index}
			id={getPanelId(index, tabsId)}
			aria-labelledby={getTabId(index, tabsId)}
			sx={{ display: "flex", flexGrow: 1 }}
			{...rest}
		>
			{children}
		</Box>
	);
}

const Exported = Object.assign(MuiTabs, {
	Tabs,
	Tab,
	Panel,
});

export default Exported;
