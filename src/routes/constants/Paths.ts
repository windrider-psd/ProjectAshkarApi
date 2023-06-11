/**
 * Express router paths go here.
 */

import { Immutable } from "@src/other/types";


const Paths = {
    Base: "/api",
    Users: {
        Base: "/users",
        Get: "/all",
        Add: "/add",
        Update: "/update",
        Delete: "/delete/:id",
    },
    Players:{
        Base: "/players",
        GetById: "/:id",
        GetAll: "/all",
        Create:"/",
        Delete: "/:id",
    },
};


// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
