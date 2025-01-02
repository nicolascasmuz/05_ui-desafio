import styles from "./ui.module.css";
import { HippoIcon } from "../../ui/icons/hippo-icon/index";
import { HorseIcon } from "../../ui/icons/horse-icon/index";
import { CatIcon } from "../../ui/icons/cat-icon/index";
import { Button, SecondaryButton, OutlineButton } from "../../ui/buttons";
import { Title, Subtitle, Body } from "../../ui/typography";

export default function UI() {
  return (
    <>
      <div className={styles["typography-container"]}>
        <Title>Título</Title>
        <Subtitle>Subtítulo</Subtitle>
        <Body>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          tenetur quas maxime necessitatibus molestiae eligendi ab nisi non
          voluptates, assumenda minus laudantium distinctio beatae esse mollitia
          ullam consectetur cumque sed?
        </Body>
      </div>
      <div className={styles["button-container"]}>
        <Button>Submit</Button>
        <SecondaryButton>Submit</SecondaryButton>
        <OutlineButton>Submit</OutlineButton>
      </div>
      <div className={styles["icon-container"]}>
        <HippoIcon />
        <HorseIcon />
        <CatIcon />
      </div>
    </>
  );
}
