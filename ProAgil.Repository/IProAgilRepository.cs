using System.Threading.Tasks;
using ProAgil.Domain;

namespace ProAgil.Repository
{
    public interface IProAgilRepository
    {
        //GERAL
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;

        Task<bool> SaveChangesAsync();

        //EVENTOS
        Task<Evento[]> GetAllEventoAsyncByTema(string tema, bool includePalestrantes);
        Task<Evento[]> GetAllEventoAsync(bool includePalestrantes = false);
        Task<Evento> GetAllEventoAsyncById(int EventoId, bool includePalestrantes);

        //Palestrante
        Task<Evento[]> GetAllPalestranteAsyncByName(bool includePalestrantes);
        Task<Evento[]> GetAllPalestranteAsync(int PalestranteId, bool includePalestrantes);
    }
}