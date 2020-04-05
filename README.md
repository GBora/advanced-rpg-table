# Advanced Rpg Table

A simple embeadeable table and random generator tag.

## Usage

In your html:

Before you write the table you have to link to this script (just once even if you have multiple pages), this might be in the head of the site but not necesarily.

```
<script src="https://unpkg.com/advanced-rpg-table"></script>

```

Then you need to configure what options your table will have, please follow this structure but you can have as manny
configs (with as many options) and tables as you want

```
  
  <script>
    // for fantasy
    weaponConfig = {
      "type": ["dagger", "sword", "bow"],
      "element": ["fire", "water", "air"],
      "aligment": ["divine","infernal"]
    }
    // or for sci fi
    shipConfig = {
      "designation": ["scout", "trader", "warship", "colony ship", "science ship"],
      "weapons": ["laser", "plasma", "mass driver"],
      "engine": ["warp drive","hyper drive", "jump drive"],
      "captain": ["rookie", "veteran", "diplomat", "pirate"]
    }
  </script>

```

Finnaly use the custom tag (web component) in your html, being carefull only for the source to reffer to an configuration you have allready written.

```
  <advanced-table subject="weapon" source="weaponConfig"></advanced-table>
```
