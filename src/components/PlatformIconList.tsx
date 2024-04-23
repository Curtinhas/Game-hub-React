import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";

import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { MdPhoneIphone } from "react-icons/md";
import { Platform } from "../hooks/useGames";
import { SiNintendo } from "react-icons/si";

interface Props {
  platforms: Platform[];
}

export const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack margin={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};
