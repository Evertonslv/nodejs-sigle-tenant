import {applyDecorators, Injectable, Scope} from "@nestjs/common";

export const ConnectionService = () =>
    applyDecorators(
        Injectable({scope: Scope.REQUEST})
    );