import { MainProps } from "./Main.props";
import styles from "./Main.module.css";
import cn from "classnames";
import { Htag } from "../../components/Htag/Htag";
import { ButtonLetter } from "../../components/ButtonLetter/ButtonLetter";
import { P } from "../../components/P/P";
import { Tag } from "../../components/Tag/Tag";
import Input from "../../components/Input/Input";

const Main = ({ className, ...props }: MainProps): JSX.Element => {
  return (
    <main className={cn(className, styles.main__wrapper)} {...props}>
      <div className={styles.content}>
        <div className={styles.routes}>
          <Htag tag="h3__gray" color="black">
            Главная - {""}
          </Htag>
          <Htag tag="h3" color="black">
            Контакты
          </Htag>
        </div>
        <Htag tag="h1" children="Мы рядом" color="blue" />
        <div className={styles.paragraph}>
          <P>
            Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите
            нам на почту{" "}
            <Tag href="#" color="blue">
              {" "}
              info@site.com
            </Tag>
          </P>
        </div>
        <div className={styles.form__block}></div>
        <form className={styles.form}>
          <div className={styles.user__data}>
            <Input type="text" label="Ваше имя" />
            <Input type="text" label="Ваш E-Mail" />
          </div>
          <Input type="text" label="Комментарий" />
        </form>
        <div className={styles.checkbox__block}>
          <input className={styles.checkbox} type="radio" />
          <div className={styles.checkbox__polit}>
            Согласен с{" "}
            <a className={styles.link}>Политикой конфиденциальности</a>
          </div>
        </div>
        <ButtonLetter className={styles.btnletter} />
      </div>
    </main>
  );
};

export default Main;
