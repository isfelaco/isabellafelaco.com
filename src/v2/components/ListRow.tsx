import { Children } from "react";
import { Box, SxProps, Theme, useTheme } from "@mui/material";

export default function ListRow({
  children,
  columns,
  sx = [],
}: {
  children: React.ReactNode;
  columns?: [string, string?];
  sx?: SxProps<Theme>;
}) {
  const theme = useTheme();

  const flexes = columns ?? [
    `0 0 ${theme.spacing(theme.layout.dateColumnWidth)}`,
    "1 1 22rem",
  ];

  return (
    <Box
      sx={[
        {
          display: "flex",
          flexWrap: "wrap",
          columnGap: theme.layout.rowColumnGap,
          rowGap: theme.layout.rowLineGap,
          py: theme.layout.rowPaddingY,
          borderTop: 1,
          borderColor: "divider",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {Children.toArray(children).map((child, i) => (
        <Box key={i} sx={{ flex: flexes[i], minWidth: 0 }}>
          {child}
        </Box>
      ))}
    </Box>
  );
}
