import React from "react";
import { Button } from "../../components/button/button";
import { ButtonGroup } from "../../components/buttonGroup/ButtonGroup";
import { IconContext } from "../../components/icon/icon";
import { defaultDesignTokens } from "../../utils/defaultDesignTokens";

export function ButtonGroupExample(): JSX.Element {
    return (
        <>
            <ButtonGroup>
                <Button variant="fill">Button 1</Button>
                <Button variant="fill">Button 2</Button>
                <Button variant="fill">Button 3</Button>
                <Button variant="fill">Button 4</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="fill">Button 1</Button>
                <Button variant="outline">Button 2</Button>
                <Button variant="text">Button 3</Button>
                <Button variant="destructive">Button 4</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="fill">As splitButton</Button>
                <Button
                    variant="fill"
                    icon={
                        <IconContext
                            color={
                                defaultDesignTokens.palette.neutral.lightText
                            }
                        />
                    }
                />
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="outline">As splitButton</Button>
                <Button
                    variant="outline"
                    icon={
                        <IconContext
                            color={defaultDesignTokens.palette.neutral.link}
                        />
                    }
                />
            </ButtonGroup>
        </>
    );
}
