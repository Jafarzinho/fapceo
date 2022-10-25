// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  let news = +req.body["news"];
  let employes = +req.body["employes"];
  let bank = +req.body["bank"];

  function minBaseMax(min:number, base:number, max:number) {
    return Math.min(Math.max(parseInt(
      String (base)
    ), min), max);
  }

  const q = [
    [3, 0, -1],
    [-3, -2, 3],
    [2, 0, -2],
    [-2, 2, 0],
    [0, -3, 2],
    [0, 3, -2]
  ];


  let indices:number[] = [];
  let melhorJogo;
  let melhorSoma = 0;
  let somaIndividual:number[] = [];


  for (let a = 0; a <= 5; a++) {
    for (let b = 0; b <= 5; b++) {
      for (let c = 0; c <= 5; c++) {
        for (let d = 0; d <= 5; d++) {
          for (let e = 0; e <= 5; e++) {
            let inicial = [news, employes, bank];
            let jogo = [q[a], q[b], q[c], q[d], q[e]];
            let soma = 0;
            [0, 1, 2].forEach(i => {
              [a, b, c, d, e].forEach(a => {
                inicial[i] = minBaseMax(0, inicial[i] + q[a][i], 16);
              });
              soma = inicial[i] > 8 ? soma + 16 - inicial[i] : soma + inicial[i];
            });

            if (soma > melhorSoma) {
              melhorJogo = jogo;
              melhorSoma = soma;
              somaIndividual = inicial;
              indices = [a, b, c, d, e].map(x => x + 1);
            }
          }
        }
      }
    }
  }
  const resu: any={melhorSoma, melhorJogo, indices, somaIndividual }
  res.status(200).json({...resu})
}
