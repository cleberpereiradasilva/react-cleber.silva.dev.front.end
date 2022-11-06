import { Technology as TechnologyStyled, TechInside as Inside, Description, Grid } from "./styles"
import { TechnologyGridProps } from "./types"

export const TechnologyGrid = ({elements} : TechnologyGridProps) => (
    <Grid>
        {elements?.map(({children, description}, i) => 
            <TechnologyStyled key={`tech-key-id-${i}`}>
                <Inside>
                {children}
                <Description>
                    {description}
                </Description>
                </Inside>
            </TechnologyStyled>
        )}
    </Grid>
)

