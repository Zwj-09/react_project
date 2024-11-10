import React, {
  CSSProperties,
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import useWatermark from "@/hooks/useWatermark";

export interface WaterMarkProps extends PropsWithChildren {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  zIndex?: number | string;
  width?: number;
  height?: number;
  rotate?: number;
  image?: string;
  content?: string | string[];
  fontStyle?: {
    fontFamily?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
  };
  gap?: [number, number];
  offset?: [number, number];
  getContainer?: () => HTMLElement;
}

const WaterMark: FC<WaterMarkProps> = (props) => {
  const {
    className,
    style,
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    fontStyle,
    gap,
    offset,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const getContainer = useCallback(() => {
    return props.getContainer ? props.getContainer() : containerRef.current!;
  }, [containerRef.current, props.getContainer]);

  const { generateWaterMark } = useWatermark({
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    fontStyle,
    gap,
    offset,
    getContainer,
  });
  useEffect(() => {
    generateWaterMark({
      zIndex,
      width,
      height,
      rotate,
      image,
      content,
      fontStyle,
      gap,
      offset,
      getContainer,
    });
  }, [
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    JSON.stringify(props.fontStyle),
    JSON.stringify(props.gap),
    JSON.stringify(props.offset),
    getContainer,
  ]
  );

  return props.children ? (
    <div className={className} style={style} ref={containerRef}>
      {props.children}
    </div>
  ) : null;
};

export default WaterMark;
