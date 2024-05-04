"use client";
import {
  Button,
  Heading,
  ScaleFade,
  Box,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Form from "./components/Form";
import { useState } from "react";
import predictIncrease from "./regression/regression";

export default function Home() {
  const [currInc, setCurrInc] = useState(1);
  const [futInc, setFutInc] = useState(1);
  const { isOpen, onToggle } = useDisclosure();
  const [incIncrease, setIncIncrease] = useState(0);

  const toggleButton = () => {
    if (currInc >= futInc) {
      alert(
        "Please ensure that your desired level is higher than your current level!"
      );
      return;
    }
    if (!isOpen) onToggle();
    setIncIncrease(predictIncrease(currInc, futInc));
  };
  return (
    <div className="flex flex-col justify-between h-screen">
      {" "}
      <div className="bg flex flex-col justify-content items-center px-10 my-10 gap-8 text-center">
        <Heading size={["lg", "xl"]}> Predict your Salary now! </Heading>
        <Text>
          Using the dataset below, give me an estimate of your current position
          and I can predict your income increase(%) in the future!
        </Text>
        <div className="flex flex-col items-center md:flex-row gap-5">
          <Image
            src="/table.png"
            width={400}
            height={400}
            alt="table"
            className="p-5"
          />
          <Image
            src="/plot.png"
            width={500}
            height={500}
            alt="plot"
            className="p-5"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-20 md:gap-20">
          <Form
            currInc={currInc}
            setCurrInc={setCurrInc}
            futInc={futInc}
            setFutInc={setFutInc}
          />
        </div>
        <div className="flex flex-col mt-10 md:mt-0 md:flex-row items-center md:gap-20">
          {" "}
          <Button onClick={toggleButton}>Predict Salary Increase!</Button>
          <ScaleFade initialScale={0.9} in={isOpen}>
            <Box
              p="20px"
              color="white"
              mt="4"
              bg="red.500"
              rounded="md"
              shadow="md"
              className="text-center"
            >
              Your Salary will increase by <b>{incIncrease}%</b>!
            </Box>
          </ScaleFade>
        </div>
      </div>
      <div className="text-center p-5">
        &copy; created by{" "}
        <a href="https://github.com/HiokKuek" className="text-blue-900">
          HiokKuek
        </a>
      </div>
    </div>
  );
}
