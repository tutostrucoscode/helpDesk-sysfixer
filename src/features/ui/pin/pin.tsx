/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FormHTMLAttributes, useEffect, useRef } from "react";

interface PinProps extends FormHTMLAttributes<HTMLFormElement> {
  length?: number;
}

const Pin = ({ length = 4, ...prop }: PinProps) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputsRef.current.length > 0) {
      const handleKeyPress = (
        event: KeyboardEvent,
        currentIndex: number
      ) => {
        if (event.key === "Enter" || event.key === "Tab") {
          event.preventDefault();
          const nextIndex = currentIndex + 1;
          if (nextIndex < inputsRef.current.length) {
            inputsRef.current[nextIndex].focus();
          }
        } else if (
          event.key.length === 1 
        ) {
          event.preventDefault();
          const nextIndex = currentIndex + 1;
          if (nextIndex < inputsRef.current.length) {
            inputsRef.current[nextIndex].focus();
          }
        }
      };

      inputsRef.current.forEach((input, index) => {
        input.addEventListener("keydown", (event) =>
          handleKeyPress(event, index)
        );
      });
    }
  }, []);

  return (
    <form data-protonpass-form {...prop}>
      <div className="mx-auto h-full w-full pb-4 md:px-8">
        <p className="text-md flex justify-center text-bunker-200">
          We've sent a verification code to
        </p>
        <p className="text-md flex justify-center font-semibold my-1 text-bunker-200">
          tiomix68@gmail.com
        </p>
        <div className="hidden md:block w-max min-w-[20rem] mx-auto">
          <div className="mt-6 mb-2 react-code-input inline-block">
            {Array.from({ length }).map((_, index) => (
              <input
                key={index}
                className="input-pin"
                data-id={index}
                type="text"
                minLength={1}
                maxLength={1}
                autoComplete="off"
                data-valid="true"
                inputMode="tel"
                ref={(input) => {
                  if (input) {
                    inputsRef.current[index] = input;
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export { Pin };
