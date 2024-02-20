import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    ProjectsModule,
    CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
