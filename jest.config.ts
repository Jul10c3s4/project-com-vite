// arquivo que contém as configurações que permitem a execução do jest em tyscript

import {Config} from "jest";
 
const config: Config = {
    preset: "ts-jest",
    transform:{
        "^.+\\.(ts|tsx)?$": "ts-jest",
    },
    //usado para mapear modules que não são encontrados em caminhos convencionais 
    moduleNameMapper:{
      "@api/(.*)":"<rootDir>src/data/api/$1",
    }
};

export default config;