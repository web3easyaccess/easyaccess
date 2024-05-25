"use client"

import { Button } from "@/components/ui/button";


export default function NewButton() {

    function hangeClick(){
        console.log(888);
      }

      return (<Button onClick={hangeClick}>submit</Button>);
}