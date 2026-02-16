import { Container } from "@/components/Container"
import { Section } from "@/components/Section"
import { Blockquote } from "@/components/typography/Blockquote"
import { Code } from "@/components/typography/Code"
import { H1 } from "@/components/typography/H1"
import { H2 } from "@/components/typography/H2"
import { H3 } from "@/components/typography/H3"
import { H4 } from "@/components/typography/H4"
import { Large } from "@/components/typography/Large"
import { Lead } from "@/components/typography/Lead"
import { List, ListItem } from "@/components/typography/List"
import { Paragraph } from "@/components/typography/Paragraph"
import { Small } from "@/components/typography/Small"

export function PrivacyPageContent() {
  return (
    <Section>
      <Container>
        <div>
          <H1>Typography</H1>
          <Lead>Ukázka všech typografických komponent z design systému.</Lead>
          <H2>Nadpisy</H2>
          <H3>H3 – Nadpis sekce</H3>
          <H4>H4 – Nadpis menší komponenty</H4>
          <H2>Text</H2>
          <Paragraph>
            Toto je standardní odstavec. Používej ho pro běžný obsah stránky.
          </Paragraph>
          <Large>
            Toto je větší text. Hodí se pro důležitější informace nebo
            zvýraznění.
          </Large>
          <Small>
            Toto je malý text – typicky pro poznámky, metadata nebo doplňující
            informace.
          </Small>
          <H2>Kód</H2>
          <Paragraph>
            Inline kód: <Code>npm install</Code>
          </Paragraph>
          <H2>Citace</H2>
          <Blockquote>
            Dobře navržený design systém šetří hodiny práce.
          </Blockquote>
          <List>
            <ListItem>1st level of puns: 5 gold coins</ListItem>
            <ListItem>2nd level of jokes: 10 gold coins</ListItem>
            <ListItem>3rd level of one-liners: 20 gold coins</ListItem>
          </List>
        </div>
      </Container>
    </Section>
  )
}
