import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProductCard = () => {
  return (
    <Card className="w-84">
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader className="flex flex-col">
        <div className="flex justify-between w-full">
          <CardTitle className="font-extrabold line-clamp-4">
            Men's Fashion Shirt
          </CardTitle>
          <CardAction>R$50.00</CardAction>
        </div>
        <CardDescription className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          consectetur dicta similique voluptas nesciunt veritatis eos dolorem,
          qui officia, iusto ea unde fugiat ut placeat? Illum culpa accusamus
          eaque soluta.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <span>Rating: 3.9</span>
        <span>120 reviews</span>
      </CardFooter>
    </Card>
  );
};
