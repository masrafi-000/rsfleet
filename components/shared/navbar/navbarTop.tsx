import { Clock,  MapPin, Phone } from "lucide-react";

const NavbarTop = () => {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2 text-muted-foreground border-x">
          <div className="flex items-center flex-1">
            <div className="flex gap-2 items-center px-4 border-r">
              <MapPin className="size-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span className="text-[11px] leading-tight">Наш адрес:</span>
                <span className="text-[12px] text-foreground font-medium">г. Бишкек, ул. Ляляля 69</span>
              </div>
            </div>
            <div className="flex gap-2 items-center px-4 border-r">
              <Clock className="size-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span className="text-[11px] leading-tight">График работы:</span>
                <span className="text-[12px] text-foreground font-medium">С 8:00 до 22:00 без выходных</span>
              </div>
            </div>
          </div>
          <div className="flex items-center px-4">
            <div className="flex items-center gap-2">
              <Phone className="size-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span className="text-[12px] font-semibold text-foreground leading-tight tracking-tight">
                  +7 (708) 51 51 518
                </span>
                <span className="text-[12px] font-semibold text-foreground leading-tight tracking-tight">
                  +7 (700) 51 51 518
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop;