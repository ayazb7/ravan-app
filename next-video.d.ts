declare module "next-video" {
  import React from "react";

  interface VideoProps {
    src: string;
    autoPlay?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    [key: string]: any; // Extend as needed
  }

  export default function Video(props: VideoProps): JSX.Element;
}
