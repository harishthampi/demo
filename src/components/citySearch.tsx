import { Search } from "lucide-react"
import { Button } from "./ui/button"

const CitySearch = () => {
  return (
    <div className="">
      <Button variant={"outline"} className="relative text-muted-foreground w-full sm:pr-12 md:w-40 lg:w-64 justify-start text-sm" >
      <Search className="mr-2 h-4 w-4" />
      Search Cities..
      </Button>
    </div>
  )
}

export default CitySearch
