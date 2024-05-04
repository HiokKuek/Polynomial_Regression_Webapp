"use client";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import { Text } from "@chakra-ui/react";
const Form = ({ currInc, setCurrInc, futInc, setFutInc }: any) => {
  const [showTooltip1, setShowTooltip1] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-10 items-center">
        <Text>
          What is your <b>current</b> level in your Organisation?
        </Text>
        <Slider
          defaultValue={1}
          min={1}
          max={10}
          onChange={(val) => setCurrInc(val)}
          w={{ base: "300px", lg: "350px", xl: "500px" }}
          step={0.1}
          onMouseEnter={() => setShowTooltip1(true)}
          onMouseLeave={() => setShowTooltip1(false)}
          focusThumbOnChange={false}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => {
            return (
              <SliderMark value={value} key={index} mt={3} fontSize={"sm"}>
                {value}
              </SliderMark>
            );
          })}
          <SliderTrack bg="red.100">
            <SliderFilledTrack bg="tomato" />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="tomato"
            color="white"
            placement="top"
            isOpen={showTooltip1}
            label={`${currInc} `}
            mb="2"
          >
            <SliderThumb />
          </Tooltip>
        </Slider>
      </div>
      <div className="flex flex-col gap-10 items-center">
        <Text>
          What is your <b>desired</b> level in your Organisation?
        </Text>
        <Slider
          defaultValue={1}
          min={1}
          max={10}
          onChange={(val) => setFutInc(val)}
          w={{ base: "300px", lg: "350px", xl: "500px" }}
          step={0.1}
          onMouseEnter={() => setShowTooltip2(true)}
          onMouseLeave={() => setShowTooltip2(false)}
          focusThumbOnChange={false}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => {
            return (
              <SliderMark value={value} key={index} mt={3} fontSize={"sm"}>
                {value}
              </SliderMark>
            );
          })}
          <SliderTrack bg="red.100">
            <SliderFilledTrack bg="tomato" />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="tomato"
            color="white"
            placement="top"
            isOpen={showTooltip2}
            label={`${futInc} `}
            mb="2"
          >
            <SliderThumb />
          </Tooltip>
        </Slider>
      </div>
    </>
  );
};

export default Form;
