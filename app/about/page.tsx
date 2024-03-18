import AnimatedText from "@/components/AnimatedText";

export default function About() {
  const text = "A";
  const textArr = text.split("");
  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <h4 className="flex">
        {textArr.map((e, index) => {
          return (
            <AnimatedText
              key={index}
              inColor="hsl(40, 100%, 50%)"
              outColor="#9A2A2A"
              text={e}
            />
          );
        })}
      </h4>
    </main>
  );
}
