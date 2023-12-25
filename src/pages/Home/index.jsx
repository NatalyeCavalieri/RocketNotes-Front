import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Header } from '../../components/Header'
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Notes"

import { ButtonText } from "../../components/ButtonText"


export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="Frontend" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" },
              ],
            }}
          />
        
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}
