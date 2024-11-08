
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


export default Header
function Header(){
    return(<div>
      {/* Header Section */}

      <header className="">
        <nav className=" flex justify-between items-center px-4 py-4 max-w-screen-xl mx-auto  ">
          {/* Logo */}
          <div className="text-sm md:text-lg lg:text-xl font-bol">CHEAMIND</div>
          <ul className="hidden md:block">
            <li className="space-x-6 text-xs md:text-lg lg:text-xl font-bold ">
              <Link className="hover:text-blue-600" href="/">Home</Link>
              <Link className="hover:text-blue-600" href="/product">Product</Link>
              <Link className="hover:text-blue-600" href="/contact">Contact us</Link>
            </li>
            </ul>
            <Sheet>
  <SheetTrigger className="block md:hidden">
    <Menu/>
  </SheetTrigger>
  <SheetContent>
  <div className="mt-10 space-y-8 text-2xl  flex flex-col mx-auto ">
              <Link className="hover:text-blue-600" href="/">Home</Link>
              <Link className="hover:text-blue-600" href="/product">Product</Link>
              <Link className="hover:text-blue-600" href="/contact">Contact us</Link>
            </div>
    
  </SheetContent>
</Sheet>
        </nav>
      </header>

</div>
    );
}


