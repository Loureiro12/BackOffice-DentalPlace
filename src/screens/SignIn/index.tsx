import { Button } from "../../components/Button";
import { ContainerSignIn, Content } from "./styles";

export function SignIn() {
  return (
    <ContainerSignIn>
      <Content>
        <Button label="Entrar"/>
      </Content>
    </ContainerSignIn>
  );
}
