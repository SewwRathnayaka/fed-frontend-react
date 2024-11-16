import Hero from "./Hero";
import Navigation from "./Navigation";
import {Button} from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
              <CardDescription>Product Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Product Content</p>
            </CardContent>
            <CardFooter>
              <Button>Buy Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;