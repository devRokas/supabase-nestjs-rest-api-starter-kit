import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { SupabaseClient } from 'src/common/supabaseClient';

@Injectable()
export class ProjectsService {
  private readonly supabaseClient;
  private tableName = 'projects';

  constructor(supabaseClient: SupabaseClient) {
    this.supabaseClient = supabaseClient.getInstance();
  }

  async create(createProjectDto: CreateProjectDto) {
    const { data, error } = await this.supabaseClient
      .from(this.tableName)
      .insert([createProjectDto]);

    if (error) throw new Error(error.message);
    return data;
  }

  async findAll() {
    const { data, error } = await this.supabaseClient
      .from(this.tableName)
      .select('*');

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: number) {
    const { data, error } = await this.supabaseClient
      .from(this.tableName)
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw new Error(error.message);
    return data;
  }
  
  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const { data, error } = await this.supabaseClient
      .from(this.tableName)
      .update(updateProjectDto)
      .eq('id', id);

    if (error) throw new Error(error.message);
    return data;
  }

  async remove(id: number) {
    const { data, error } = await this.supabaseClient
      .from(this.tableName)
      .delete()
      .eq('id', id);

    if (error) throw new Error(error.message);
    return data;
  }
}
