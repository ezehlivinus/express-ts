// declare global{
//     namespace Express {
//         interface Request {
//             auth: any
//         }
//     }
// }

declare namespace Express {
    export interface Request {
        auth?: any,
        validData?: any
    }
  }
