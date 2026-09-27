import { Box, SxProps, Theme, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  sx,
}: {
  children: React.ReactNode;
  delay?: number;
  sx?: SxProps<Theme>;
}) {
  const theme = useTheme();

  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let root: Element | null = el.parentElement;
    while (root) {
      const overflowY = getComputedStyle(root).overflowY;
      if (overflowY === "auto" || overflowY === "scroll") break;
      root = root.parentElement;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { root, threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      className={visible ? "is-revealed" : undefined}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(18px)",
        transition: `opacity ${theme.motion.duration.enter} ${theme.motion.easing} ${delay}ms, transform ${theme.motion.duration.enter} ${theme.motion.easing} ${delay}ms`,
        "@media (prefers-reduced-motion: reduce)": {
          opacity: 1,
          transform: "none",
          transition: "none",
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
