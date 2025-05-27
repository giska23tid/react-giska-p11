import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./FrameworkList";
import FrameworkListFilters from "./FrameworkListSearchFilter";
import Responsif from "./Responsif";
createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            {/* <FrameworkListFilters/> */}
            <Responsif/>
        </div>
    ) 