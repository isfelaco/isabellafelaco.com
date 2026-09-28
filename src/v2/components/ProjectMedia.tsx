import { useState } from "react";
import {
  Box,
  ButtonBase,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Media = { kind: "image"; src: string } | { kind: "video"; src: string };

// Sizing goes on the media elements themselves rather than through a
// descendant selector, which the mediaZoom mixin's own selector would replace
const previewSx = { display: "block", width: "100%", height: "auto" } as const;
const fullSizeSx = {
  display: "block",
  width: "100%",
  maxHeight: "75vh",
  objectFit: "contain",
} as const;

// A project's screenshot or recording. The inline preview opens the media
// full size in a dialog; videos only get playback controls there, so a click
// on the preview always means "open".
export default function ProjectMedia({
  media,
  title,
}: {
  media: Media;
  title: string;
}) {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const titleId = `media-dialog-${title.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <>
      <ButtonBase
        onClick={() => setOpen(true)}
        aria-label={`View ${title} full size`}
        sx={{
          display: "block",
          width: "100%",
          borderRadius: 2,
          overflow: "hidden",
          border: 1,
          borderColor: "divider",
          boxShadow: theme.elevation.media,
          backgroundColor: "background.inset",
          cursor: "zoom-in",
          ...theme.mixins.mediaZoom,
        }}
      >
        {media.kind === "image" ? (
          <Box
            component="img"
            src={media.src}
            alt=""
            loading="lazy"
            sx={previewSx}
          />
        ) : (
          // Seeking slightly in shows the first frame instead of a blank box
          <Box
            component="video"
            src={`${media.src}#t=0.1`}
            muted
            playsInline
            preload="metadata"
            sx={previewSx}
          />
        )}
      </ButtonBase>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
        aria-labelledby={titleId}
      >
        <DialogTitle
          id={titleId}
          variant="h4"
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <Box component="span" sx={{ flexGrow: 1 }}>
            {title}
          </Box>
          <IconButton
            edge="end"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {media.kind === "image" ? (
            <Box component="img" src={media.src} alt={title} sx={fullSizeSx} />
          ) : (
            <Box
              component="video"
              src={media.src}
              controls
              autoPlay
              playsInline
              aria-label={title}
              sx={fullSizeSx}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
