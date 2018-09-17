import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { ExerciseResolver } from './resolvers/exercise.resolver';

@Module({
    imports: [CommonModule],
    providers: [ExerciseResolver],
})
export class ExerciseModule {}
