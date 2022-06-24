import { gql, useQuery } from "@apollo/client"

import ReactPlayer from "react-player"

import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react"

interface VideoProps {
  videoId: string
}
export function Video({ videoId }: VideoProps) {
  return (
    <div className="flex-1 border-b border-gray-600 overflow-scroll-y">
      <div className="bg-black flex justify-center">
        <div className=" h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            url={"https://www.youtube.com/watch?v=" + videoId}
          />
        </div>
      </div>
    </div>
  )
}
