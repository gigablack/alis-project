import React from "react"
import { Card, Elevation } from "@blueprintjs/core"
import ButtonChildProfile from "../ButtonChildProfile/ButtonChildProfile.jsx"
import "./ChildListItem.module.scss"
import { Icon, Intent } from "@blueprintjs/core"
import { IconNames } from "@blueprintjs/icons"


const ChildListItem = ({ name, sex }) => {
  return (
    <Card
      interactive={true}
      elevation={Elevation.TWO}
      style={{
        marginTop: "2vh",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Icon
          icon={
            sex === "male"
              ? IconNames.SYMBOL_TRIANGLE_UP
              : IconNames.SYMBOL_TRIANGLE_DOWN
          }
          intent={sex === "male" ? Intent.PRIMARY : Intent.DANGER}
          iconSize={Icon.SIZE_LARGE}
        />
        <h3>{name}</h3>
      </div>
      <ButtonChildProfile />
    </Card>
  )
}

export default ChildListItem
