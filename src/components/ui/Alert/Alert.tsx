import "./index.scss";
import { BellRing, X } from "lucide-react";

interface IPropos {}

const Alert = ({}: IPropos) => {
  return (
    <div className="alert-danger">
      <div className="alert-header">
        <div className="title">
          <span>
            <BellRing />
          </span>

          <h4>Alert Title</h4>
        </div>

        <X className="close" size={25} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        explicabo eveniet asperiores, dolorem possimus tempore veniam officiis.
        Ad, cupiditate fugiat? Corrupti, numquam beatae doloribus adipisci
        repellendus odit dolore non labore.
      </p>
    </div>
  );
};

export default Alert;

//typescriptreact.json
