import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { SectionResolver } from './resolvers/section.resolver';

@Module({
    imports: [CommonModule],
    providers: [SectionResolver],
})
export class SectionModule {}
