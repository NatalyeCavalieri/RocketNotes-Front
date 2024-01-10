import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { useState } from 'react'


import { Container, Form } from './styles'

export function New(){

  const [links, SetLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  function handleAddLink (){
    SetLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink (deleted){
    SetLinks(prevState => prevState.filter(link => link !== deleted))
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              placeholder="Novo link"
              isNew
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Marcadores">
            <div className="marcador">
              <NoteItem value="React" />
              <NoteItem placeholder="Novo marcador" isNew />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}