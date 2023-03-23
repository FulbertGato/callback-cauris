class PlatformeModel {
    private repository: IPlatformeRepository;

    constructor(platformeRepository: IPlatformeRepository) {
        this.repository = platformeRepository;
    }
}

export default PlatformeModel;
