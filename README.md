# Advanced Rpg Table

A simple embeadeable table and random generator tag.

## Usage

In your html:

```
  <script>
    weaponConfig = {
      "type": ["dagger", "sword", "bow"],
      "element": ["fire", "water", "air"],
      "aligment": ["divine","infernal"]
    }

    shipConfig = {
      "designation": ["scout", "trader", "warship", "colony ship", "science ship"],
      "weapons": ["laser", "plasma", "mass driver"],
      "engine": ["warp drive","hyper drive", "jump drive"],
      "captain": ["rookie", "veteran", "diplomat", "pirate"]
    }
  </script>
  <advanced-table subject="weapon" source="weaponConfig"></advanced-table>
  
```


