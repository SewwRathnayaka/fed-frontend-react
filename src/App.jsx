import Hero from "./Hero";
import Navigation from "./Navigation";
import {Button} from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";


function App() {

  const name= "Nuwani";
  const cartCount=4;

  return (
    <div>
      <Navigation name={name} cartCount={cartCount}/>
      <Hero />
      <div className="p-4">
        <div className="p-4 w-96">
          <Card className="border-2">
            <CardHeader>
              <Badge className="w-fit">New</Badge>
              <CardTitle>Product Name</CardTitle> 
              <CardDescription>
               <HoverCard>
                  <HoverCardTrigger>Product Description</HoverCardTrigger>
                  <HoverCardContent>
                  main features: ultra-lightweight, colourful design, a dynamic driver, easy device pairing
                  </HoverCardContent>
                </HoverCard>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Product Content</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="blue">System</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter>
              <Button>Buy Now</Button>
              <p className="flex p-4">Add to cart</p>
              <Switch/>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;