import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { EvaluationsOutput } from './evaluations.output';

export class EventEvaluationsOutput {
  @ApiProperty({
    name: 'evaluations',
    description: 'Lista de avaliações',
    type: EvaluationsOutput,
  })
  @Expose()
  evaluations: EvaluationsOutput[];

  @ApiProperty({
    name: 'average',
    description: 'Média das avaliações',
    type: 'number',
  })
  @Expose()
  average: number;
}
