import { Container } from "@/components/Container"
import { Section } from "@/components/Section"
import { TableOfContents } from "@/components/TableOfContents"
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
          <H1>Typografie</H1>
          <Lead>Ukázka typografických komponent design systému v praxi.</Lead>

          {/* --- Nadpisy --- */}
          <H2>Struktura nadpisů</H2>
          <H3>Úvod do sekce</H3>
          <Paragraph>
            Tato sekce vysvětluje hlavní body produktu a jeho funkce.
          </Paragraph>
          <H3>Klíčové vlastnosti</H3>
          <Paragraph>
            Naše aplikace nabízí rychlé vyhledávání, jednoduché ovládání a
            přehledné rozhraní.
          </Paragraph>
          <H4>Doplňující informace</H4>
          <Paragraph>
            Můžete přizpůsobit nastavení podle vlastních potřeb.
          </Paragraph>

          <H2>Textové bloky</H2>
          <H3>Standardní text</H3>
          <Paragraph>
            Zde je ukázka běžného odstavce používaného pro hlavní obsah stránky.
          </Paragraph>
          <Paragraph>
            Další odstavce pomáhají lépe rozdělit informace a zvýšit čitelnost.
          </Paragraph>
          <Large>
            Zvýrazněný text je ideální pro upozornění na důležité informace.
          </Large>
          <Small>
            Malý text je vhodný pro poznámky, metadata nebo drobné doplňky.
          </Small>

          <H2>Kód</H2>
          <H3>Instalace</H3>
          <Paragraph>
            Použijte příkaz: <Code>npm install</Code> pro instalaci balíčků.
          </Paragraph>
          <H3>Příklad použití</H3>
          <Paragraph>
            Komponenta tlačítka se používá následovně:{" "}
            <Code>{"<Button>Odeslat</Button>"}</Code>
          </Paragraph>

          <H2>Citace</H2>
          <H3>Inspirace</H3>
          <Blockquote>
            Dobře navržený systém šetří čas a zjednodušuje práci.
          </Blockquote>
          <H3>Další citace</H3>
          <Blockquote>
            Čistý a přehledný kód je základem kvalitního produktu.
          </Blockquote>

          <H2>Seznamy</H2>
          <H3>Seznam funkcí</H3>
          <List>
            <ListItem>Rychlé vyhledávání</ListItem>
            <ListItem>Jednoduché ovládání</ListItem>
            <ListItem>Přehledné rozhraní</ListItem>
          </List>
          <H3>Další seznam</H3>
          <List>
            <ListItem>Nastavení uživatele</ListItem>
            <ListItem>Notifikace</ListItem>
            <ListItem>Export dat</ListItem>
          </List>

          <H2>Další informace</H2>
          <H3>Užitečné tipy</H3>
          <Paragraph>
            Využijte klávesové zkratky pro rychlejší práci a lepší přehlednost.
          </Paragraph>
          <Paragraph>
            Pravidelně kontrolujte nastavení a aktualizace aplikace.
          </Paragraph>
          <H3>Podpora a dokumentace</H3>
          <Paragraph>
            Naše dokumentace obsahuje kompletní návod k použití všech funkcí.
          </Paragraph>

          {/* --- Table of Contents --- */}
          <TableOfContents />
        </div>
      </Container>
    </Section>
  )
}
