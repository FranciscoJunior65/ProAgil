namespace ProAgil.Domain
{
    public class PalestranteEvento
    {
        public int PalestranteId { get; set; }   
        public Palestrante Evento { get; set; }
        public int EventoId { get; set; }
        public Evento Evento { get; set; }
    }
}