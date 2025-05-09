#!/usr/bin/env zx
import 'zx/globals';

const advisories = [
  // === main repo ===
  //
  // Crate:     ed25519-dalek
  // Version:   1.0.1
  // Title:     Double Public Key Signing Function Oracle Attack on `ed25519-dalek`
  // Date:      2022-06-11
  // ID:        RUSTSEC-2022-0093
  // URL:       https://rustsec.org/advisories/RUSTSEC-2022-0093
  // Solution:  Upgrade to >=2
  'RUSTSEC-2022-0093',

  // Crate:     idna
  // Version:   0.1.5
  // Title:     `idna` accepts Punycode labels that do not produce any non-ASCII when decoded
  // Date:      2024-12-09
  // ID:        RUSTSEC-2024-0421
  // URL:       https://rustsec.org/advisories/RUSTSEC-2024-0421
  // Solution:  Upgrade to >=1.0.0
  // need to solve this depentant tree:
  // jsonrpc-core-client v18.0.0 -> jsonrpc-client-transports v18.0.0 -> url v1.7.2 -> idna v0.1.5
  'RUSTSEC-2024-0421',

  // === programs/sbf ===
  //
  // Crate:     curve25519-dalek
  // Version:   3.2.1
  // Title:     Timing variability in `curve25519-dalek`'s `Scalar29::sub`/`Scalar52::sub`
  // Date:      2024-06-18
  // ID:        RUSTSEC-2024-0344
  // URL:       https://rustsec.org/advisories/RUSTSEC-2024-0344
  // Solution:  Upgrade to >=4.1.3
  'RUSTSEC-2024-0344',

  // Crate:     tonic
  // Version:   0.9.2
  // Title:     Remotely exploitable Denial of Service in Tonic
  // Date:      2024-10-01
  // ID:        RUSTSEC-2024-0376
  // URL:       https://rustsec.org/advisories/RUSTSEC-2024-0376
  // Solution:  Upgrade to >=0.12.3
  'RUSTSEC-2024-0376',
];
const ignores: string[] = [];
advisories.forEach((x) => {
  ignores.push('--ignore');
  ignores.push(x);
});

await $`cargo audit ${ignores}`;
