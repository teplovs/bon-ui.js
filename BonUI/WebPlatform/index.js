//
// Copyright (c) 2020 Teplovs
// Licensed under the Apache license 2.0
//

import { Application } from "../App/index.js"
import { WebPlatform } from "./WebPlatform.js"

Application.addPlatform(() =>
  typeof window === "object" ? new WebPlatform() : null
)