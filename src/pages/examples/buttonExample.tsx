import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button/button";
import { IconSettings } from "../../components/icon/icon";
import { defaultDesignTokens } from "../../utils/defaultDesignTokens";

export function ButtonExample(): JSX.Element {
  return (
    <>
      <ButtonContainer>
        <Button
          onClick={() => alert("Fill button")}
          variant="fill"
          label="Fill"
        ></Button>
        <Button
          onClick={() => alert("Fill button")}
          variant="fill"
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.lightText}
            />
          }
          label="Fill"
        ></Button>
        <Button
          onClick={() => alert("Fill button")}
          variant="fill"
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.lightText}
            />
          }
        />
        <Button
          onClick={() => alert("Fill button")}
          variant="fill"
          disabled
          label="Fill"
        ></Button>
        <Button
          onClick={() => alert("Fill button")}
          variant="fill"
          disabled
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.onDisabled}
            />
          }
          label="Fill"
        ></Button>
        <Button
          onClick={() => alert("Fill button")}
          variant="fill"
          disabled
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.onDisabled}
            />
          }
        />
      </ButtonContainer>
      <ButtonContainer>
        <Button
          onClick={() => alert("Outline button")}
          variant="outline"
          label="Outline"
        ></Button>
        <Button
          onClick={() => alert("Outline button")}
          variant="outline"
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.link}
            />
          }
          label="Outline"
        ></Button>
        <Button
          onClick={() => alert("Outline button")}
          variant="outline"
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.link}
            />
          }
        />
        <Button
          onClick={() => alert("Outline button")}
          variant="outline"
          disabled
          label="Outline"
        ></Button>
        <Button
          onClick={() => alert("Outline button")}
          variant="outline"
          disabled
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.onDisabled}
            />
          }
          label="Outline"
        ></Button>
        <Button
          onClick={() => alert("Outline button")}
          variant="outline"
          disabled
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.onDisabled}
            />
          }
        />
      </ButtonContainer>
      <ButtonContainer>
        <Button
          onClick={() => alert("Text button")}
          variant="text"
          label="Text"
        ></Button>
        <Button
          onClick={() => alert("Text button")}
          variant="text"
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.link}
            />
          }
          label="Text"
        ></Button>
        <Button
          onClick={() => alert("Text button")}
          variant="text"
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.link}
            />
          }
        />
        <Button
          onClick={() => alert("Text button")}
          variant="text"
          disabled
          label="Text"
        ></Button>
        <Button
          onClick={() => alert("Text button")}
          variant="text"
          disabled
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.onDisabled}
            />
          }
          label="Text"
        ></Button>
        <Button
          onClick={() => alert("Text button")}
          variant="text"
          disabled
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.onDisabled}
            />
          }
        />
      </ButtonContainer>
      <ButtonContainer>
        <Button
          onClick={() => alert("Error button")}
          variant="destructive"
          label="Error"
        ></Button>
        <Button
          onClick={() => alert("Error button")}
          variant="destructive"
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.lightText}
            />
          }
          label="Error"
        ></Button>
        <Button
          onClick={() => alert("Error button")}
          variant="destructive"
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.lightText}
            />
          }
        />
        <Button
          onClick={() => alert("Error button")}
          variant="destructive"
          disabled
          label="Error"
        ></Button>
        <Button
          onClick={() => alert("Error button")}
          variant="destructive"
          disabled
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.onDisabled}
            />
          }
          label="Error"
        ></Button>
        <Button
          onClick={() => alert("Error button")}
          variant="destructive"
          disabled
          icon={
            <IconSettings
              size={16}
              color={defaultDesignTokens.palette.neutral.onDisabled}
            />
          }
        />
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 12px;
`;
