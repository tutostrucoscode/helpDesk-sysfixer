import React from "react";
// import { Button } from "@/features/ui/button/button";
// import { Activity, ChevronRight } from "lucide-react";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
// } from "@/features/ui/card/card";
// import { ButtonGroup } from "@/features/ui/button-group/button-group";
import Sidebar from "@/features/ui/sidebar/sidebar";
import { Pin } from "@/features/ui/pin/pin";

const Test = () => {
  return (
    <div>
      {/* <Button
        variant="outlined"
        color="default"
        size="sm"
        endIcon={<Activity />}
      >
        Boton de pruebas
      </Button>
      <br />
      <br />
      <ButtonGroup>
        <Button variant="outlined">Boton de pruebas</Button>
        <Button variant="outlined">Boton de pruebas</Button>
        <Button variant="outlined">Boton de pruebas</Button>
      </ButtonGroup>
      <br />
      <br />
      <Card>
        <CardHeader
          avatar={<Activity />}
          action={
            <Button
              variant="dashed"
              color="violet"
              size="default"
              startIcon={<Activity />}
            >
              Upgrade
            </Button>
          }
        >
          Security features require the Plus plan
        </CardHeader>
        <CardContent>Tarjeta de pruebas</CardContent>
        <CardActions>
          <Button
            variant="dashed"
            color="violet"
            size="default"
            endIcon={<ChevronRight />}
          >
            Upgrade
          </Button>
        </CardActions>
      </Card> */}

      <Pin/>
      {/* <Sidebar></Sidebar> */}
    </div>
  );
};

export default Test;
