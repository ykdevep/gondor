import { Module } from '@nestjs/common';
import { TestResolver } from './resolvers/test.resolver';
import { CommonModule } from '../common/common.module';

@Module({
    imports: [CommonModule],
    providers: [TestResolver],
})
export class TestModule {}
