import useWindowSize from "@/hooks/useWindowSize";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Swiper, SwiperProps } from "swiper/react";

interface ISwiperProps extends SwiperProps {
  children: React.ReactNode;
}

interface ISwiperContext {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const SwiperContext = createContext<ISwiperContext>({
  active: 0,
  setActive: () => {},
});

const SwiperProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;
  const [active, setActive] = useState(0);

  return (
    <SwiperContext.Provider value={{ active, setActive }}>
      {children}
    </SwiperContext.Provider>
  );
};

const SwipeWrapper = (props: ISwiperProps) => {
  const { children, ...swiperProps } = props;
  const { active, setActive } = useContext(SwiperContext);

  const swiperRef = useRef<any>(null);
  const swiper = swiperRef.current?.swiper;

  useEffect(() => {
    if (swiper?.activeIndex == active) return;
    if (active !== 0) {
      swiper?.slideTo(1);
    } else {
      swiper?.slidePrev();
    }
  }, [active, swiper]);

  return (
    <Swiper
      ref={swiperRef}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      onSlideChange={(swiper) => {
        if (swiper.activeIndex !== active) setActive(swiper.activeIndex);
      }}
      {...swiperProps}
    >
      {children}
    </Swiper>
  );
};

export const useGender = () => {
  const { active } = useContext(SwiperContext);
  return active === 0 ? "Female" : "Male";
};

export const useSwipeStatus = () => {
  const size = useWindowSize();
  return size < 992;
};

export { SwiperProvider, SwipeWrapper };
