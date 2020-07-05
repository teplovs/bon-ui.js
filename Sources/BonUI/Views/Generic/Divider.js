//
// Copyright (c) 2020 Teplovs
// Licensed under the Apache License, version 2.0
// 

import { CSSModifier } from "../../Modifiers/CSSModifier.js"
import { Rectangle } from "../Shapes/Rectangle.js"
import { Color } from "../../Values/Color.js"
import { View } from "../View.js"

export class Divider extends View {
    constructor () {
        super()
    }

    get body () {
        const rectangle = (
            new Rectangle()
                .foregroundColor(Color.secondary)
        )

        rectangle.prependVNodeModifier(new CSSModifier({
            flexBasis: "1px",
            alignSelf: "stretch",
            flexShrink: "0"
        }))

        return rectangle
    }
}
