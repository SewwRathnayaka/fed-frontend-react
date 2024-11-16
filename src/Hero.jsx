import "./Hero.css";
import {Button} from "@/components/ui/button";

function Hero() {
  return (
    <section className="p-8 mx-16">
      <div className="grid grid-cols-2 rounded-md bg-[#f4f8f9]">
        <div className="flex flex-col justify-center p-16 gap-4 ">
          <span className="inline-block rounded-full py-1 px-2 text-xs w-fit bg-[#febc26]">WEEKLY DISCOUNT</span>
          <h1 className="text-6xl font-semibold leading-none">Premium Product Online Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <Button className="px-2 py-2 text-white bg-black rounded-md inline-block w-fit font-medium  " asChild>
          <a to="/shop">
            Shop Now
          </a>
          </Button>
        </div>
        <div className="relative">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt=""
            className="container h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;