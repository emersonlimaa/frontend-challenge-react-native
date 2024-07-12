import { UnitiesProps } from "@/modules/Threatened/services/threatened.services";

export type ProfileType = {
  user: number;
  nome: string;
  ativo: boolean;
  avatar: string | null;
  contextos: ContextoUnidade[]
  contextoAtual: ContextoUnidade
  cpf: string
};
export interface IPerfilProps {
  id: number;
  nome: string;
  codigo: string;
  descricao: string | null;
  ativo: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContextoUnidade {
  id: number;
  perfil_id: number;
  user_id: number;
  unidade_id: number;
  deleted_at: string | null;
  perfil: IPerfilProps;
  unidade: UnitiesProps;
}